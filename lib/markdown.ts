import matter from "gray-matter";
import fs from 'fs';

export function readFile(fileName: string) {
    const fileContents = fs.readFileSync(fileName, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const postDate = new Date(matterResult.data.date);

    return {
        'content': matterResult.content,
        'createdAt': postDate,
        ...matterResult.data
    }
}