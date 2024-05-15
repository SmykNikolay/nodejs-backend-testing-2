import { PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;

  beforeEach(() => {
    postsService = new PostsService();
  });

describe('.findMany', () => {
  const posts = [
    {id: '1', text: 'Post 1'},
    {id: '2', text: 'Post 2'},
    {id: '3', text: 'Post 3'},
    {id: '4', text: 'Post 4'},
  ];

  beforeEach(() => {
    posts.forEach((post) => postsService.create(post));
  });

  it('should return all posts if called without options', () => {
    const foundPosts = postsService.findMany();
    expect(foundPosts.length).toEqual(posts.length);
    expect(foundPosts).toEqual(posts);
  });

  it('should return correct posts for skip and limit options', () => {
    const foundPosts = postsService.findMany({skip: 1, limit: 2});
    expect(foundPosts.length).toEqual(2);
    expect(foundPosts).toEqual(posts.slice(1, 3));
  });

  it('should return all posts from skip if limit is not provided', () => {
    const foundPosts = postsService.findMany({skip: 2});
    expect(foundPosts.length).toEqual(2);
    expect(foundPosts).toEqual(posts.slice(2));
  });
});

  
  });
