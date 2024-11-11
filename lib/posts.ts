import fs from 'fs';
import path from 'path';
import { readFile } from './markdown';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = fileNames.map((fileName) => {
        const fullPath = path.join(postsDirectory, fileName);

        return {
            ...readFile(fullPath)
        };
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.createdAt.getTime() < b.createdAt.getTime()) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getPost(id: string) {
    const fileNames = fs.readdirSync(postsDirectory);

    for (const fileName of fileNames) {
        // Remove ".md(x)" from file name to get id
        const fileID = fileName.replace(/\.mdx?$/, '');

        const fullPath = path.join(postsDirectory, fileName);
        if (fileID == id) {
            return {
                ...readFile(fullPath)
            };
        }
    }

    return
}