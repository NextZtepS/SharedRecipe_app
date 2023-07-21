export function handleTagString(tagString: string): string[] {
    if (tagString) {
        let tagList = tagString.split(" ");
        for (let i = 0; i < tagList.length; i++) {
            tagList[i] = tagList[i].replace("#", "");
        }
        return tagList;
    } else {
        return [];
    }
}

export function reverseTagString(tags: string[]): string {
    if (tags.length >= 1) return "#" + tags.join(" #");
    else return "";
}