const BlogPostController = require('./BlogPostController');
describe('BlogPostController', () => {
  it('should get all blog posts', async () => {
    const blogPostController = new BlogPostController();
    const blogPosts = await blogPostController.getAllBlogPosts();
    expect(blogPosts).toBeInstanceOf(Array);
  });
  it('should create a new blog post', async () => {
    const blogPostController = new BlogPostController();
    const blogPost = await blogPostController.createBlogPost('Test Title', 'Test Content', 'Test Author');
    expect(blogPost).toHaveProperty('id');
  });
});