import { useContext, useState, useEffect } from "react";
import { SupabaseContext } from "../supabase/client";

const useHighScores = () => {
	const { supabase } = useContext(SupabaseContext);

	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [usersByCoins, setUsersByCoins] = useState();

	useEffect(() => {
		const fetchUsersByCoins = async () => {
			setIsLoading(true);
			try {
				const { data, error } = await supabase
					.from("users")
					.select()
					.range(0, 9)
					.order("coins", { ascending: false });

				setUsersByCoins(data);
			} catch (error) {
				setIsError(true);
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchUsersByCoins();
	}, [supabase, setUsersByCoins]);

	return [isLoading, isError, usersByCoins];
};

export default useHighScores;
