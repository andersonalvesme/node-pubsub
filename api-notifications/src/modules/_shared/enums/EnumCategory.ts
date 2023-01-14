export enum EnumCategory {
    SPORTS = 1,
    FINANCE = 2,
    MOVIES = 3
}

export const EnumCategoryLabel = new Map<number, string>([
    [EnumCategory.SPORTS, 'Sports'],
    [EnumCategory.FINANCE, 'Finance'],
    [EnumCategory.MOVIES, 'Movies']
]);

export const EnumCategoryKey = new Map<number, string>([
    [EnumCategory.SPORTS, 'SPORTS'],
    [EnumCategory.FINANCE, 'FINANCE'],
    [EnumCategory.MOVIES, 'MOVIES']
]);
