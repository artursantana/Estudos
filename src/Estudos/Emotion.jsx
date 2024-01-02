import { css } from '@emotion/css'




const Emotion = () => {
    const color = 'white'
  return (
    <div className={css`
    padding: 25px;
    width: 50px;
    background-color: hotpink;

    &:hover{
            color: ${color};
    }
    `}>
      artur
    </div>
  )
}

export default Emotion
