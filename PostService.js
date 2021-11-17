import Post from "./Post.js";

class PostService {
    async create(post, picture){
        try {
            const createdPost = await Post.create(post);
            return createdPost;
        }catch (e){
            console.log(e.message);
        }
    };
    async getAll(param){
    try {
        const pageIndex = param.pageIndex;
        const pageSize = param.pageSize;
        const sortField = param.sortField;
        const sort = param.sort;

        const posts = await Post.find().limit(pageIndex * pageSize);
        let item = pageIndex * pageSize;
        const resPosts = [];
        for (let i = item - pageSize; i < item; i++) {
            if (posts[i] !== undefined) {
                resPosts.push(posts[i])
            } else{
                i = item
            }
        };
        if (sort ==='asc'){
            if (sortField === 'price') {
                resPosts.sort((a, b) => a.Price > b.Price ? 1 : -1);
            }else if (sortField === 'name'){
                resPosts.sort((a, b) => a.Name > b.Name ? 1 : -1);
            };
        }else if (sort === 'desc'){
            if (sortField === 'price') {
                resPosts.sort((a, b) => a.Price < b.Price ? 1 : -1);

            }else if (sortField === 'name'){
                resPosts.sort((a, b) => a.Name < b.Name ? 1 : -1);
            }
        };
        return resPosts;

    }catch (e){
        console.log(e);
    }
        return resPosts;
    };


    async count(){
        const countOfposts = await Post.count();
        return countOfposts;
    };

    async deleteAll(){
      const num = Post.deleteMany({});
      return num
    };

    async getOne(id){
        if (!id) {
            throw new Error('не указан ID');
        }
        const post = await Post.findById(id);
        return post
    };

    async expensive(){
        const posts = await Post.find().sort({Price: -1});
        return posts;
    };

    async cheapest(){
        const posts = await Post.find().sort({Price: 1});
        return posts;
    };

    async median(){
        const post = await this.expensive();
        const position = await this.count();
        return post[position/2];
    };

    async delete(id){
        if (!id) {
            throw new  Error('ID not specified');
        }
        const post = await Post.findByIdAndDelete(id);
        return post;

    }
}

export default new PostService();
