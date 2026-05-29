const db = require("../config/db");
const { fetchGithubProfile } = require("../services/githubService");

const analyzeProfile = async (req, res) => {
    try {
        const { username } = req.params;

        const profile = await fetchGithubProfile(username);

        const data = {
            username: profile.login,
            name: profile.name,
            bio: profile.bio,
            public_repos: profile.public_repos,
            followers: profile.followers,
            following: profile.following,
            account_created: profile.created_at.split("T")[0],
            profile_url: profile.html_url,
            avatar_url: profile.avatar_url
        };

        const query = `
            INSERT INTO github_profiles
            (username, name, bio, public_repos, followers, following,
             account_created, profile_url, avatar_url)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON DUPLICATE KEY UPDATE
            name = VALUES(name),
            bio = VALUES(bio),
            public_repos = VALUES(public_repos),
            followers = VALUES(followers),
            following = VALUES(following),
            profile_url = VALUES(profile_url),
            avatar_url = VALUES(avatar_url)
        `;

        db.query(
            query,
            [
                data.username,
                data.name,
                data.bio,
                data.public_repos,
                data.followers,
                data.following,
                data.account_created,
                data.profile_url,
                data.avatar_url
            ],
            (err) => {
                if (err) {
                    return res.status(500).json({
                        error: err.message
                    });
                }

                res.json({
                    message: "Profile analyzed successfully",
                    data
                });
            }
        );

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

const getAllProfiles = (req, res) => {
    const query = "SELECT * FROM github_profiles";

    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.json(results);
    });
};

const getSingleProfile = (req, res) => {
    const { username } = req.params;

    const query =
        "SELECT * FROM github_profiles WHERE username = ?";

    db.query(query, [username], (err, results) => {
        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                message: "Profile not found"
            });
        }

        res.json(results[0]);
    });
};

module.exports = {
    analyzeProfile,
    getAllProfiles,
    getSingleProfile
};