import { useGetPokemonByNameQuery } from "../src/services/pokemonApi";

const Poke = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  return (
    <>
      <div>
        <p>
          {" "}
          Poke is {data?.base_experience} and has {data?.moves[0]?.move?.name}
        </p>
        <div>{error?.message}</div>
      </div>
    </>
  );
};

export default Poke;
