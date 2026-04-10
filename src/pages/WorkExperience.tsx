import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';
import { TimelineItem } from '../types';
import { getTimeline } from '../queries/getTimeline';


const WorkExperience: React.FC = () => {

  const [timeLineData, setTimeLineData] = useState<TimelineItem[] | null>(null);

  useEffect(() => {
    async function fetchTimelineItem() {
      const data = await getTimeline();
      setTimeLineData(data);
    }
    fetchTimelineItem();
  }, []);


  if (!timeLineData) return <div>Loading...</div>;
  console.log("🚀 ~ timeLineData:", timeLineData)

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">Work Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline>
        {timeLineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={
              item.timelineType === "work"
                ? { background: '#1e1e1e', color: '#e6e6e6', border: '1px solid #e50914' }
                : { background: '#2a2a2a', color: '#e6e6e6', border: '1px solid #444' }
            }
            contentArrowStyle={
              item.timelineType === "work"
                ? { borderRight: '7px solid #e50914' }
                : { borderRight: '7px solid #444' }
            }
            date={item.dateRange}
            iconStyle={
              item.timelineType === "work"
                ? { background: '#e50914', color: '#fff' }
                : { background: '#b00710', color: '#fff' }
            }
            icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            {item.timelineType === "work" ? (
              <div style={{ color: '#e6e6e6' }}>
                <h3 className="vertical-timeline-element-title" style={{ color: '#fff' }}>{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle" style={{ color: '#ccc' }}>{item.name}</h4>
                <p className="vertical-timeline-element-tech" style={{ color: '#e50914' }}>🔧 {item.techStack}</p>
                <p>{item.summaryPoints}</p>
              </div>
            ) : (
              <div style={{ color: '#e6e6e6' }}>
                <h3 className="vertical-timeline-element-title" style={{ color: '#fff' }}>{item.name}</h3>
                <h4 className="vertical-timeline-element-subtitle" style={{ color: '#ccc' }}>{item.title}</h4>
                <p>{item.summaryPoints}</p>
              </div>
            )}
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: '#e50914', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
