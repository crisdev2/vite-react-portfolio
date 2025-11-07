import { Fragment, type FC } from "react";
import styled from "styled-components";
import type { ITimeLine } from "../../models/timeline";

interface Props {
  items: ITimeLine[];
  order?: "asc" | "desc";
}

const TimeLineWrapper = styled.div``;

const TimeLineContainer = styled.div``;

const TimeLineItem = styled.div`
  display: flex;
  align-items: stretch;
  gap: 30px;
  ${({ theme }) => theme.mediaMobile} {
    gap: 10px;
  }
`;

const TimeLineDates = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.textPrimary};
  font-size: ${({ theme }) => theme.fontSizeSm};
  text-align: center;
  text-transform: uppercase;
  position: relative;
  font-weight: bold;
  .tl-label {
    opacity: 0.6;
    font-size: ${({ theme }) => theme.fontSizeXs};
    display: block;
    min-width: 80px;
    font-weight: normal;
    text-transform: none;
  }
  .tl-top {
    margin-top: 1rem;
  }
  .tl-bottom {
    margin-bottom: 1rem;
  }
  .tl-separator {
    flex-grow: 1;
    border-bottom: 3px solid ${({ theme }) => theme.accent};
    width: calc(100% + 35px);
    position: absolute;
    bottom: -10px;
    left: -15px;
    opacity: 0;
  }
`;

const TimeLineContent = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  ${({ theme }) => theme.mediaMobile} {
    gap: 15px;
  }
`;

const TimeLineBar = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  .tl-circle {
    color: ${({ theme }) => theme.accent};
  }
  .tl-bar {
    flex-grow: 1;
    margin: 8px 0;
    width: 3px;
    background-color: ${({ theme }) => theme.accent};
  }
`;

const TimeLineMainContent = styled.div`
  padding-bottom: 0.5rem;
`;

const TimeLine: FC<Props> = ({ items, order = "desc" }) => {
  return (
    <TimeLineWrapper>
      <TimeLineContainer>
        {items.map((item, index) => (
          <TimeLineItem key={index}>
            <TimeLineDates>
              {order === "asc" ? (
                <Fragment>
                  <div className="tl-top">
                    <span className="tl-label">start date</span>
                    {item.startDate}
                  </div>
                  <div className="tl-bottom">
                    {item.endDate}
                    <span className="tl-label">end date</span>
                    <div className="tl-separator" />
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  <div className="tl-top">
                    <span className="tl-label">end date</span>
                    {item.endDate}
                  </div>
                  <div className="tl-bottom">
                    {item.startDate}
                    <span className="tl-label">start date</span>
                    <div className="tl-separator" />
                  </div>
                </Fragment>
              )}
            </TimeLineDates>
            <TimeLineContent>
              <TimeLineBar>
                <div className="tl-circle">
                  <i
                    className="pi pi-calendar"
                    style={{ fontSize: "1rem" }}
                  ></i>
                </div>
                <div className="tl-bar" />
              </TimeLineBar>
              <TimeLineMainContent>
                {item.title}
                <div className="tl-description">{item.description}</div>
              </TimeLineMainContent>
            </TimeLineContent>
          </TimeLineItem>
        ))}
      </TimeLineContainer>
    </TimeLineWrapper>
  );
};

export default TimeLine;
