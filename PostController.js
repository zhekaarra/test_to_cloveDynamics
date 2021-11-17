import PostService from "./PostService.js";

class PostController{
    async create(req,res){
        try {
            const post = await PostService.create(req.body);
            res.json(post);
        } catch (e){
            res.status(500).json(e);

        }
    };
    async getAll(req,res){
        try {
            const param = req.query;
            const posts = await PostService.getAll(param);
            return  res.json(posts);

        }catch (e){
            res.status(500).json(e);
        }
    };
    async count(req,res){
        try {
            const posts = await PostService.count();
            return  res.json(posts);

        }catch (e){
            res.status(500).json(e);
        }
    };
    async expensive(req,res){
        try {
            const posts = await PostService.expensive();
            return  res.json(posts);

        }catch (e){
            res.status(500).json(e);
        }

    };
    async cheapest(req,res){
        try {
            const posts = await PostService.cheapest();
            return  res.json(posts);

        }catch (e){
            res.status(500).json(e);
        }

    };

    async deleteAll(req,res){
        try {
         const num = await PostService.deleteAll();
            return res.json(num);
        }catch (e){
            res.status(500).json(e);
        }

    };

    async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id);
            return res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    };
    async update(req,res){
        try {
            const updatedPost = await PostService.update(req.body);
            return res.json(updatedPost);

        }catch (e){
            res.status(500).json(e.message);
        }

    }
    async delete(req,res){
        try {
            const post = await PostService.delete(req.params.id);
            return res.json(post);

        }catch (e){
            res.status(500).json(e);
        }

    };
    async median(req,res){
        try{
            const post = await PostService.median();
            return res.json(post);
        }catch (e){
            res.status(500).json(e);
        }
    };

}
export default new PostController();
