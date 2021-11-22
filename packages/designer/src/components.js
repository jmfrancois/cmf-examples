import React from "react";
// import * as strap from "reactstrap";
import { Inject, cmfConnect } from "@talend/react-cmf";

export const propTypes = {};

export function getReactElement(data, CustomInject = Inject) {
  if (Array.isArray(data)) {
    return data.map(info => getReactElement(info, CustomInject));
  } else if (data === null) {
    return data;
  } else if (typeof data === "string") {
    return <CustomInject component={data} />;
  } else if (React.isValidElement(data)) {
    return data;
  } else if (typeof data === "object") {
    return <CustomInject {...data} />;
  }
  return data; // We do not throw anything, proptypes should do the job
}

// function wrap(Component) {
// //   const Connected = cmfConnect({})(Component);
//   function Wrapper({ content, ...props }) {
//     const newProps = Object.assign({}, props);
//     let injectedContent;
//     if (content) {
//         injectedContent = getReactElement(content);
//     }
//     return <Component {...newProps}>{injectedContent}</Component>;
//   }
//   Wrapper.displayName = `Wrapper(${Component.displayName || Component.name})`;
//   Wrapper.propTypes = Component.propTypes;
//   return cmfConnect({})(Wrapper);
// }

// const components = Object.keys(strap).reduce((acc, current) => {
//   if (typeof strap[current] === "function") {
//     console.log(current);
//     acc[current] = wrap(strap[current]);
//     if (strap[current].propTypes) {
//       propTypes[current] = strap[current].propTypes;
//     }
//     return acc;
//   }
//   return acc;
// }, {});

// export default components;
