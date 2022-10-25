import React from "react";

export default function Card({ user }) {
    return (
        <div className="flex flex-col items-center justify-center  w-1/2 rounded-md p-10 mt-4 shadow-lg">
            <img
                src={user.picture?.original?.url || "https://placekitten.com/200/200"}
                className="w-24 h-24 rounded-full mr-4"
            />
            <h2 className="text-2xl font-semibold mt-4">
                {user.name} (@{user.handle})
            </h2>
            <p className="mt-4">
                <span className="font-semibold">{user.stats.totalFollowers}</span>{" "}
                Followers
                <span className="font-semibold ml-4">
                    {user.stats.totalFollowing}
                </span>{" "}
                Following
                <span className="font-semibold ml-4">{user.stats.totalPosts}</span>        Posts
            </p>
            <p className="text-center mt-4">{user.bio}</p>
        </div>
    );
} 