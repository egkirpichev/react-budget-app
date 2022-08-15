import { StylesConfig } from "react-select";
import { ICurrencyOption } from "../../types";
import { Color } from "../../ui/color";

export const customStyles: StylesConfig<ICurrencyOption, boolean> = {
  control: (styles) => ({
    ...styles,
    minHeight: `30px`,
    border: `1px solid ${Color.LightGrey}`,
    cursor: `pointer`,
  }),

  valueContainer: (styles) => ({
    ...styles,
    padding: 0,
    textAlign: `center`,
    fontWeight: `400`,
    fontSize: `12px`,
    lineHeight: `15px`,
  }),

  indicatorsContainer: (styles) => ({
    ...styles,
    div: {
      padding: `0px 5px`,
    },
  }),

  indicatorSeparator: (styles) => ({
    ...styles,
    border: `1px solid ${Color.LightGrey}`,
  }),
};
