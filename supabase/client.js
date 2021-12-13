import { createContext } from "react";
import { createClient } from "@supabase/supabase-js";

export const SupabaseContext = createContext(null);

export const SupabaseProvider = ({ children }) => {
	const supabase = createClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL,
		process.env.NEXT_PUBLIC_SUPABASE_KEY
	);

	const updateServerStats = async (userId, rounds, coins) => {
		const { data, error } = await supabase
			.from("users")
			.update({ rounds: rounds, coins: coins })
			.match({ user_id: userId });

		if (error) {
			console.log(error.message);
		}
	};

	const value = {
		supabase,
		updateServerStats,
	};

	return (
		<SupabaseContext.Provider value={value}>
			{children}
		</SupabaseContext.Provider>
	);
};
