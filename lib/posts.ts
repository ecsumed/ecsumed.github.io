/* eslint-disable  @typescript-eslint/no-explicit-any */

import fs from 'fs';
import path from 'path';
import { readFile } from './markdown';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getSortedPostsData(tagFilter: string = "") {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);

    let allPostsData = fileNames.map((fileName) => {
        const fullPath = path.join(postsDirectory, fileName);

        return {
            ...readFile(fullPath)
        };
    });

    if (tagFilter != "") {
        const filteredPostData = allPostsData.filter(post => (post as any).tags.includes(tagFilter));

        allPostsData = filteredPostData;
    }

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

export function getAllPostTags() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);

    let allTags = []
    fileNames.map((fileName) => {
        const fullPath = path.join(postsDirectory, fileName);

        const post: any = readFile(fullPath)

        allTags = [ ...allTags, ...post.tags];
    });

    const uniqueTags = new Set(allTags);

    return Array.from(uniqueTags.values());
    ;
}