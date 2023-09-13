"use client";

import { useEffect, useState } from "react";

export const useUser = () => {
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    const fetchUserId = async () => {
      const response = await fetch(`/api/current_user`);
      const data = await response.json();
      setUserId(data);
    };

    fetchUserId();
  }, []);

  return { userId };
};
