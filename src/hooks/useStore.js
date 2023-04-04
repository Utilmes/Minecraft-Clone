import { nanoid } from 'nanoid'
import { create } from 'zustand'

export const useStore = create(set => ({
  texture: 'dirt',
  cubes: [],
  addCube: (x, y, z) => {
    set(state => ({
      cubes: [...state.cubes, {
        key: nanoid(),
        id: nanoid(),
        texture: state.texture,
        pos: [x, y, z]
      }]
    }))
  },
  removeCube: (x, y, z) => {
    set((prev) => ({
        cubes: prev.cubes.filter(cube => {
            const [X, Y, Z] = cube.pos
            return X !== x || Y !== y || Z !== z
        })

    }))
},
  setTexture: (texture) => {
    set(() => ({ texture }))
  },
  saveWorld: () => {},
  resetWorld: () => {
    set(() => ({
        cubes:[]
    }))
  }
}))