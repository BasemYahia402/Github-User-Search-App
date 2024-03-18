export const fetchUserDetails = async (username) => {
  try {
    const accessToken = "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";
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const userData = await response.json();

    const repositories = userData.public_repos;
    const followers = userData.followers;


    return [repositories, followers];
  } catch (error) {
    console.error("Error fetching user details:", error);
    return [];
  }
};
