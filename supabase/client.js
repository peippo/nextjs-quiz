import { createContext } from "react";
import { createClient } from "@supabase/supabase-js";

export const SupabaseContext = createContext(null);

export const SupabaseProvider = ({ children }) => {
	const supabase = createClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL,
		process.env.NEXT_PUBLIC_SUPABASE_KEY
	);

	const value = {
		supabase,
	};

	return (
		<SupabaseContext.Provider value={value}>
			{children}
		</SupabaseContext.Provider>
	);
};
