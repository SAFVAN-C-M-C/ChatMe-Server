export interface BioDetails{
    name?:string | null;
    title?: string | null;
    email?:string|null;
    bio?:{
      location?: string | null;
      phone?: string | null;
    }
}