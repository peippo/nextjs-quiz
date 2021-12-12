import { useState, useEffect, useContext } from "react";
import { SupabaseContext } from "../supabase/client";

const useUserStats = (userId) => {
	const { supabase } = useContext(SupabaseContext);

	const [userStats, setUserStats] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const fetchUserStats = async () => {
			setIsLoading(true);
			const { data, error } = await supabase
				.from("users")
				.select("rounds, coins")
				.eq("user_id", userId);

			if (!error) {
				setUserStats(data[0]);
			} else {
				console.log(error.message);
				setIsError(true);
			}

			setIsLoading(false);
		};

		fetchUserStats();
	}, [supabase, userId]);

	return [isLoading, isError, userStats];
};

export default useUserStats;
