import { getChildren } from 'vuepress-sidebar-atuo';

// 接口定义在函数外部
interface SidebarItem {
    text: string;
    link?: string;
    children?: any;
}

interface SidebarType {
    [tag: string]: SidebarItem[];
}

const RootDir: string = 'docs';
export function CombinationSidebar(series: Record<string, SidebarItem>, navbar?: string[]): SidebarType | SidebarItem[] {
    let sidebar: SidebarType = {};

    const keyList = Object.keys(series);
    for (const key of keyList) {
        const { text } = series[key];
        const tag = `/${RootDir}/${key}/`;
        const children = getChildren(`${RootDir}${tag}`);
        sidebar[tag] = [{ text, children }];
    }

    return navbar ? keyList
        .filter(key => navbar.includes(key))
        .map(key => {
            const { text, link } = series[key]
            return { text, link: `/${RootDir}${link}` }
        }) :
        sidebar;
}