import { gql } from "@apollo/client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useEffect, useState } from "react";
import client from "./client";
import Card from "./components/card";

export default function Home() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    let query = gql` 
      query ExploreProfiles { 
        exploreProfiles(request: { sortCriteria: MOST_FOLLOWERS }) { 
          items { 
            id 
            name 
            handle 
            picture { 
              ... on NftImage { 
                uri 
              } 
              ... on MediaSet { 
                original { 
                  url 
                  mimeType 
                } 
              } 
            } 
            stats { 
              totalFollowers 
              totalFollowing 
              totalPosts 
            } 
          } 
        } 
      } 
    `;
    client.query({ query }).then(({ data }) => {
      setUsers(data.exploreProfiles.items);
    });
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-4xl font-semibold mb-4">Lens App</h1>
      <ConnectButton />
      {users.map((user) => (
        <Card user={user} />
      ))}
    </div>
  );
} 