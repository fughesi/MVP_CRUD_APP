import { useGetPokemonByNameQuery } from "../services/pokemonApi";
import { useSelector, useDispatch } from "react-redux";
import {
  flipBool,
  increaseByOne,
  increasebyAmount,
  decreaseByOne,
  decreaseByAmount,
} from "../features/users/usersSlice";

const Poke = () => {
  const count = useSelector((state) => state.counter.value);
  const bool = useSelector((state) => state.counter.bool);
  const dispatch = useDispatch();
  const { data, error } = useGetPokemonByNameQuery("bulbasaur");
  return (
    <>
      <div>
        <p>
          Poke is {data?.base_experience} and has {data?.moves[0]?.move?.name}
        </p>

        <div>
          <div>{count}</div>
          <button onClick={() => dispatch(increaseByOne())}>clickMe</button>
          <button onClick={() => dispatch(decreaseByOne())}>clickMe</button>
        </div>

        <div>{JSON.stringify(bool)}</div>
        <div>
          <button onClick={() => dispatch(flipBool())}>bool</button>
        </div>

        <div>{error?.message}</div>
      </div>
    </>
  );
};

export default Poke;
