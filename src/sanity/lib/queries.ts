import { groq } from 'next-sanity';

export const postsQuery = groq`*[_type == "post"] | order(_createdAt desc) {
  _id,
  _createdAt,
  title,
  slug,
  mainImage,
  body,
  "description": body[0].children[0].text,
  "imageURL": mainImage.asset->url,
  "authorName": author->name,
}`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && _id == $id][0]{ 
     _id,
    _createdAt,
    title,
    "slug": slug.current,
    mainImage {
      _type,
      alt,
      asset->{
        _ref,
        url
      }
    },
    body,
    "imageURL": mainImage.asset->url,
    "authorName": author->name,
    "description": body[0].children[0].text
}`;

  export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  mainImage {
    _type,
    alt,
    asset->{
      _ref,
      url
    }
  },
  body,
  "imageURL": mainImage.asset->url,
  "authorName": author->name,
  "description": body[0].children[0].text
}`;

	export const postByIdQuery = groq`*[_type == "post" && _id == $id][0] {
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  mainImage {
    _type,
    alt,
    asset->{
      _ref,
      url
    }
  },
  body,
  "imageURL": mainImage.asset->url,
  "authorName": author->name,
  "description": body[0].children[0].text
}`;

export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
}`;
