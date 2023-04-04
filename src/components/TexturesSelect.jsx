import { useEffect, useState } from 'react'
import { useKeyBoard } from '../hooks/useKeyBoard.js'
import { useStore } from '../hooks/useStore.js'
import * as images from '../images/images.js'

export const TextureSelector = () => {
    const [visible, setVisible] = useState(false)
    const [texture, setTexture] = useStore(state => [state.texture, state.setTexture])

    const {
    dirt,
    grass,
    glass,
    log,
    wood
    } = useKeyBoard()

    useEffect(() => {
        const visibilityTimeout = setTimeout(() => {
            setVisible(false)
        }, 1000)
        setVisible(true)

        return () => {
            clearTimeout(visibilityTimeout)
        }
    }, [texture])

    useEffect(() => {
        const options = {
            dirt,
            glass,
            grass,
            log,
            wood
        }

        const selectedTexture = Object
        .entries(options)
        .find(([texture, isEnabled]) => isEnabled) 

        if(selectedTexture) {
            const [textureName] = selectedTexture
            setTexture(textureName)
        }

        console.log(selectedTexture)

    }, [dirt, glass, grass, log, wood])

    return (
        <div className={`texture-selector ${visible ? '' : 'hidden'}`}>
            {
                Object
                .entries(images)
                .map(([imgKey, img]) => {
                    return (
                        <img 
                            className={texture == imgKey.replace('Img', '') ? 'selected' : ''}
                            key={imgKey}
                            src={img}
                            alt={imgKey}
                        />
                    )
                })
            }
        </div>
    )

}