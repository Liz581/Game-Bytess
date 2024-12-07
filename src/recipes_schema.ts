// confirm the setup

export interface Recipe {
    id: string;
    name: string;
    game: string;
    description: string;
    ingredients: string;
    steps: string
    imageURL: string;
    likes: number;
}

export interface remixRecipe {
    id: string;
    recipe_id: number;
    user_uid: string;
    changes: string;
    imageURL: string;
    likes: number;
}

export interface Users {
    uid: string;
    username: string;
    email: string;
}