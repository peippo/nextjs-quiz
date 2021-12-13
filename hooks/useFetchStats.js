import { useState, useEffect, useContext } from "react";
import { SupabaseContext } from "../supabase/client";
import { useRecoilValue, useRecoilState } from "recoil";
import { userAtom } from "../state/user";
import { statsAtom } from "../state/stats";

const useFetchStats = () => {
	const { supabase } = useContext(SupabaseContext);
	const user = useRecoilValue(userAtom);
	const [stats, setStats] = useRecoilState(statsAtom);

	useEffect(() => {
		const fetchUserStats = async () => {
			const { data, error } = await supabase
				.from("users")
				.select("rounds, coins")
				.eq("user_id", user.userId);

			if (!error) {
				setStats(data[0]);
			} else {
				console.log(error.message);
			}
		};

		if (user.userId && !stats) {
			fetchUserStats();
		}
	}, [supabase, user, stats, setStats]);
};

export default useFetchStats;
