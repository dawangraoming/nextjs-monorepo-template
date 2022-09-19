import { FC } from 'react';
import { Image } from '../Image';
import imageAvatar from '../../assets/avatar.png';

export const Avatar: FC = () => {
  return (
    <div
      style={{
        borderRadius: '99999px',
        width: 100,
        height: 100,
        background: 'gray',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Image
        src={imageAvatar}
        alt="avatar"
        style={{
          width: 100,
          height: 100,
          position: 'absolute',
          left: 0,
          top: 0,
        }}
      />
    </div>
  );
};
