//styles
import styled, { css } from 'styled-components';
import { between, rem } from 'polished';
import vars from 'components/styles/Vars';

//styled
const Heading = styled.h1`
  color: ${vars.colors.textDark};
  font-size: ${props => props.fontSize ? rem(props.fontSize + 'px') : rem('40px')};
  font-weight: ${props => props.fontWeight ? props.fontWeight : 'bold'};
  line-height: ${props => props.lineHeight ? props.lineHeight : 1.2};
  margin-bottom: ${props => props.marginBottom ? rem(props.marginBottom + 'px') : rem('20px')};
  /* @media (max-width: ${vars.media.lgMax}) {
    font-size: ${props => props.size ? between((props.fontSize - 10) + 'px', props.fontSize + 'px') : between('30px', '40px')};
  } */
  /* Heading1 */
  ${props => props.heading1 && css`
    font-size: ${props => props.fontSize ? rem(props.fontSize + 'px') : rem('40px')};
  `}
  /* Heading2 */
  ${props => props.heading2 && css`
    font-size: ${props => props.fontSize ? rem(props.fontSize + 'px') : rem('32px')};
  `}
  /* Heading3 */
  ${props => props.heading3 && css`
    font-size: ${props => props.fontSize ? rem(props.fontSize + 'px') : rem('28px')};
  `}
  /* Heading4 */
  ${props => props.heading4 && css`
    font-size: ${props => props.fontSize ? rem(props.fontSize + 'px') : rem('24px')};
  `}
  /* Heading5 */
  ${props => props.heading5 && css`
    font-size: ${props => props.fontSize ? rem(props.fontSize + 'px') : rem('20px')};
  `}
  /* Heading6 */
  ${props => props.heading6 && css`
    font-size: ${props => props.fontSize ? rem(props.fontSize + 'px') : rem('16px')};
  `}
`;

export default Heading;