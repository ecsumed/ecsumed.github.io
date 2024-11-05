import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        
        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id: matterResult.data.id,
            content: matterResult.content,
            tags: matterResult.data.tags,
            createdAt: matterResult.data.date,
            description: matterResult.data.desc,
            image: matterResult.data.img,
            title: matterResult.data.title
        };
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.createdAt < b.createdAt) {
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

        if (fileID == id) {
            // Read markdown file as string
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            // Use gray-matter to parse the post metadata section
            const matterResult = matter(fileContents);

            return {
                id: matterResult.data.id,
                content: matterResult.content,
                tags: matterResult.data.tags,
                createdAt: matterResult.data.date,
                description: matterResult.data.desc,
                image: matterResult.data.img,
                title: matterResult.data.title
            };
        }
    }

    return
}