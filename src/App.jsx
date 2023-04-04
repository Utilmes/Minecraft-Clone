import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'
import { FVP as Fvp } from './components/FPV.jsx'
import { Player } from './components/Player.jsx'
import { Cubes } from './components/Cubes.jsx'
import { TextureSelector } from './components/TexturesSelect'
import { Menu } from './components/Menu'

function App () {
  return (
    <>
    <Canvas>
      <Sky sunPosition={[100, 100, 20]} />
      <ambientLight intensity={0.5} />
      <Fvp />
      <Physics>
        <Cubes />
        <Player />
        <Ground />
      </Physics>
    </Canvas>
    <div className='pointer'>+</div>
    <TextureSelector />
    <Menu />
    </>
  )
}

export default App
