import RotateLoader from "react-spinners/RotateLoader";

import { S_Loading } from './loading-screen.styles';

const Loading = () => {
  return (
    <S_Loading>
      <RotateLoader color='#1e86ff' size={13} />
    </S_Loading>
  );
}

export default Loading;