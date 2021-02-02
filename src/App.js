import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Briefcase } from './assets/briefcase.svg';
import { ReactComponent as Globe } from './assets/globe.svg';
import { ReactComponent as Clock } from './assets/clock.svg';
import { ReactComponent as ChevronLeft } from './assets/chevron-left.svg';
import { ReactComponent as ChevronRight } from './assets/chevron-right.svg';
import { ReactComponent as Kebab } from './assets/ellipsis.svg';

const S_AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const S_PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;

const S_Header = styled.div`
  padding-top: 40px;
  font-size: 24px;
`;

const S_HeaderText = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
`;

const S_SearchContainer = styled.div`
  background-image: url('./assets/solen-feyissa.jpg');
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const S_InputContainer = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 790px;
  display: flex;
  align-items: center;
  column-gap: 8px;
  padding: 4px 4px 4px 18px;
`;

const S_Input = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  padding: 15px 0;
  cursor: text;
`;

const S_SearchButton = styled.button`
  border: none;
  outline: none;
  background-color: #1E86FF;
  color: #fff;
  padding: 14px 48px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0 3px rgba(30,134,255, 0.5);
  }
`;

const S_ContentContainer = styled.div`
  display: flex;
  column-gap: 30px;
`;

const S_CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 30px;
`;

const S_Checkbox = styled.input`
  height: 18px;
  width: 18px;
  cursor: pointer;
  margin: 0;
  appearance: none;
  border: 1px solid #B9BDCF;
  border-radius: 2px;
  outline: none;
  z-index: 1;

  &:checked {
    border-color: #1E86FF;
  }

  &:checked + div {
    opacity: 1;
  }
`;

const S_Checkmark = styled.div`
  position: absolute;
  opacity: 0;
  z-index: 0;
  background-color: #1E86FF;
  height: 18px;
  width: 18px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  transition: .1s;
`;

const S_CheckboxInputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const S_CheckboxLabel = styled.label`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
`;

const S_FilterHeader = styled.span`
  text-transform: uppercase;
  color: #B9BDCF;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 14px;
  display: inline-block;
  margin-bottom: 14px;
`;

const S_FilterTextInputContainer = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  padding-left: 18px;
  padding-right: 4px;
  margin-bottom: 25px;
`;

const S_FilterColumn = styled.div`
  flex-grow: 1;
`;

const S_ContentColumn = styled.div`
  flex-grow: 2;
`;

const S_Radio = styled.input`
  height: 18px;
  width: 18px;
  appearance: none;
  border: 1px solid #B9BDCF;
  border-radius: 50%;
  outline: none;
  margin: 0;
  transition: .1s;

  &:checked {
    border-color: #1E86FF;
    border-width: 4px;
  }
`;

const S_RadioLabel = styled.label`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  cursor: pointer;
`;

const S_RadioContainer = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
  position: relative;
`;

const S_RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 17px;
`;

const S_Item = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  display: flex;
  column-gap: 16px;
  padding: 12px;
`;

const S_ItemImage = styled.div`
  height: 90px;
  width: 90px;
  background-image: url('./assets/kasisto-logo.png');
  background-size: cover;
  background-position: center;
  border-radius: 4px;
`;

const S_ItemDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  flex-grow: 1;
`;

const S_DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const S_SubDetailsContainer = styled.div`
  display: flex;
  column-gap: 25px;
  flex-grow: 1;
  justify-content: flex-end;
`;

const S_CompanyText = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: #334680;
`;

const S_TitleText = styled.span`
  font-size: 18px;
  color: #334680;
`;

const S_EmploymentText = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: #334680;
  border: 1px solid #334680;
  border-radius: 4px;
  padding: 6px 8px;
`;

const S_SubDetail = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
`;

const S_SubDetailText = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #B9BDCF;
`;

const S_ItemList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin-bottom: 30px;
`;

const S_Footer = styled.div`
  text-align: center;
  margin-top: 100px;
`;

const S_FooterText = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #B9BDCF;
`;

const S_Paginator = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 12px;
`;

const S_PaginatorItem = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: #B7BCCE;
  border-style: ${({NoBorder}) => NoBorder ? 'none' : 'solid'};
  border-radius: 4px;
  transition: all .1s;
  color: #B7BCCE;
  font-size: 12px;
  cursor: ${({NoBorder}) => NoBorder ? 'default' : 'pointer'};

  ${({active}) => active ? 'border: 1px solid #1E86FF; background-color: #1E86FF; color: #fff;' : ''}

  &:hover {
    border-color: #1E86FF;
    color: ${({active}) => active ? '' : '#1E86FF'};
  }

  > svg {
    transition: all .1s;
    fill: #B7BCCE;
  }

  &:hover > svg {
    fill: ${({NoBorder}) => NoBorder ? '' : '#1E86FF'};
  }
`;

function App() {
  return (
    <S_AppContainer>
      <S_PageContainer>

        <S_Header>
          <S_HeaderText><b>Github</b> Jobs</S_HeaderText>
        </S_Header>

        <S_SearchContainer>
          <S_InputContainer>
            <Briefcase style={{opacity: 0.25}} height='15' width='15' />
            <S_Input required type='text' id='search' placeholder='Title, company, expertise or benefits' />
            <S_SearchButton>Search</S_SearchButton>
          </S_InputContainer>
        </S_SearchContainer>

        <S_ContentContainer>
          <S_FilterColumn>
            <S_CheckboxContainer>
              <S_CheckboxInputContainer>
                <S_Checkbox id='fullTime' type='checkbox' />
                <S_Checkmark>✓</S_Checkmark>
              </S_CheckboxInputContainer>
              <S_CheckboxLabel for='fullTime'>Full time</S_CheckboxLabel>
            </S_CheckboxContainer>
            <S_FilterHeader>Location</S_FilterHeader>
              <S_FilterTextInputContainer>
                <Globe style={{opacity: 0.25}} height='15' width='15' />
                <S_Input required type='text' id='citySearch' placeholder='City, state, zip code or country' />
              </S_FilterTextInputContainer>
              <S_RadioGroup>
                <S_RadioContainer>
                  <S_Radio type='radio' name='city' value='London' id='london' />
                  <S_RadioLabel for='london'>London</S_RadioLabel>
                </S_RadioContainer>
                <S_RadioContainer>
                  <S_Radio type='radio' name='city' value='Amsterdam' id='amsterdam' />
                  <S_RadioLabel for='amsterdam'>Amsterdam</S_RadioLabel>
                </S_RadioContainer>
                <S_RadioContainer>
                  <S_Radio type='radio' name='city' value='New York' id='newYork' />
                  <S_RadioLabel for='newYork'>New York</S_RadioLabel>
                </S_RadioContainer>
                <S_RadioContainer>
                  <S_Radio type='radio' name='city' value='Berlin' id='berlin' />
                  <S_RadioLabel for='berlin'>Berlin</S_RadioLabel>
                </S_RadioContainer>
              </S_RadioGroup>
          </S_FilterColumn>

          <S_ContentColumn>
            <S_ItemList>
              <S_Item>
                <S_ItemImage />
                <S_ItemDescriptionContainer>
                  <S_CompanyText>Kasisto</S_CompanyText>
                  <S_TitleText>Front-End Software Engineer</S_TitleText>
                  <S_DetailsContainer>
                    <S_EmploymentText>Full time</S_EmploymentText>
                    <S_SubDetailsContainer>
                      <S_SubDetail>
                        <Globe style={{opacity: 0.25}} height='15' width='15' />
                        <S_SubDetailText>New York</S_SubDetailText>
                      </S_SubDetail>
                      <S_SubDetail>
                        <Clock style={{opacity: 0.25}} height='15' width='15' />
                        <S_SubDetailText>5 days ago</S_SubDetailText>
                      </S_SubDetail>
                    </S_SubDetailsContainer>
                  </S_DetailsContainer>
                </S_ItemDescriptionContainer>
              </S_Item>
            </S_ItemList>

            <S_Paginator>
                <S_PaginatorItem><ChevronLeft height='27' width='19' /></S_PaginatorItem>
                <S_PaginatorItem>1</S_PaginatorItem>
                <S_PaginatorItem active>2</S_PaginatorItem>
                <S_PaginatorItem>3</S_PaginatorItem>
                <S_PaginatorItem NoBorder><Kebab height='12' width='37' /></S_PaginatorItem>
                <S_PaginatorItem>10</S_PaginatorItem>
                <S_PaginatorItem><ChevronRight height='27' width='19' /></S_PaginatorItem>
              </S_Paginator>
          </S_ContentColumn>
        </S_ContentContainer>

      </S_PageContainer>
      <S_Footer>
        <S_FooterText>Kirill Klimov @ DevChallanges.io</S_FooterText>
      </S_Footer>
    </S_AppContainer>
  );
}

export default App;
