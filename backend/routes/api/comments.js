/**
 * @route GET /
 * @group Comments - Operations about comments
 * @returns {Array.<Comment>} 200 - An array of comment objects
 * @returns {Error}  default - Unexpected error
 * @description Get all comments for a post.
 */

/**
 * @route DELETE /:commentId
 * @group Comments - Operations about comments
 * @param {string} commentId.path.required - The ID of the comment to delete
 * @returns {void} 200 - Successfully deleted the comment
 * @returns {Error}  default - Unexpected error
 * @description Delete a comment by its ID.
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

//hey githubco-pilot, write a route to get all comments for a post
router.get("/", (req, res) => {
    Comment.find()
    .then((comments) => {
        res.json(comments);
    })
    .catch((err) => {
        console.error(err);
    });
})
// add another endpoint for deleting a comment.
router.delete("/:commentId", async (req, res, next) => {
    try {
        await Comment.findByIdAndRemove(req.params.commentId);
        res.sendStatus(200);
    } catch (err) {
        next(err);
    }
});