const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const getImagePath = (path: string) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    return `${BASE_PATH}${path.startsWith('/') ? '' : '/'}${path}`;
};
