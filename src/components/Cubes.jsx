import { useStore } from "../hooks/useStore";
import { Cube } from "./Cube";

export const Cubes = () => {
    const [cubes] = useStore(state => [state.cubes])

    return cubes.map(({key, id, pos, texture}) => {
        return (<Cube 
        key={key}
        id={id}
        position={pos}
        texture={texture}
        />
        )
    })
}