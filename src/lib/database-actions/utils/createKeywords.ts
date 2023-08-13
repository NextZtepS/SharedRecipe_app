export function createKeywords(
    menuName: string,
    userName: string,
    tagList: string[]
): string[] {
    let keywords: string[] = []
    menuName = menuName.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    userName = userName.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    if (menuName)
        for (let i = 1; i <= menuName.length; i++) {
            keywords.push(menuName.substring(0, i))
        }
    if (userName)
        for (let i = 1; i <= userName.length; i++) {
            keywords.push(userName.substring(0, i))
        }
    if (tagList.length != 0) {
        for (let tag of tagList) {
            tag = tag.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
            for (let i = 1; i <= tag.length; i++) {
                keywords.push(tag.substring(0, i));
            }
        }
    }
    return keywords;
}