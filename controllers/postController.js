const Post = require('../models/Post');

exports.createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const post = new Post({title, content, user: req.user.id });
        await post.save();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};