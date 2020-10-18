import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import Select from 'react-select';
import ProjectCard from './ProjectCard/ProjectCard';
import { projects } from '../../data/projects';

const StyledSelect = styled(Select)`
  margin: 20px;
  div {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    div:first-child {
      width: 110px;
    }
  }
`;

const StyledSelectContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const StyledCategory = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  font-family: 'Abril Fatface', sans-serif;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.6rem;
  padding-top: 1rem;
  padding-bottom: 2.5rem;
  text-transform: capitalize;
`;
const ProjectList = () => {
  const [proj, setProj] = useState(projects);
  const [selected, setSelected] = useState('level');
  const [order, setOrder] = useState(1);

  const filtersCat = [
    {
      value: 'category',
      label: 'Category',
    },
    {
      value: 'level',
      label: 'Complexity',
    },
    {
      value: 'finished',
      label: 'Date finished',
    },
  ];

  const orderBy = [
    {
      value: -1,
      label: 'Asc',
    },
    {
      value: 1,
      label: 'Desc',
    },
  ];
  useEffect(() => {
    console.log(selected, order);
    const sorted = [...proj].sort((a, b) =>
      a[selected] < b[selected] ? order : -order
    );
    setProj(sorted);
    console.log(sorted);
  }, [selected, order]);

  const handleCat = (selectedOption) => {
    setSelected(selectedOption.value);
  };
  const handleOrder = (selectedOption) => {
    setOrder(selectedOption.value);
  };

  const dateFormat = (date) => {
    const nth = (d) => {
      if (d > 3 && d < 21) return 'th';
      switch (d % 10) {
        case 0:
          return '';
        case 1:
          return 'st';
        case 2:
          return 'nd';
        case 3:
          return 'rd';
        default:
          return 'th';
      }
    };
    const newDate = new Date(date);
    const d = newDate.getDate();
    const month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ][newDate.getMonth()];

    return `${newDate.getFullYear()} ${month} ${d} ${nth(d)}`;
  };

  return (
    <>
      <StyledSelectContainer>
        <StyledSelect
          options={filtersCat}
          onChange={handleCat}
          defaultValue={filtersCat.filter(
            (option) => option.label === 'Complexity'
          )}
        />
        <StyledSelect
          options={orderBy}
          onChange={handleOrder}
          defaultValue={orderBy.filter((option) => option.label === 'Desc')}
        />
      </StyledSelectContainer>
      {proj.map((p, i) => (
        <>
          {selected === 'category' &&
            i < proj.length &&
            proj[i - 1]?.category !== p.category && (
              <StyledCategory>{p.category}</StyledCategory>
            )}
          {selected === 'finished' &&
            i < proj.length &&
            proj[i - 1]?.finished !== p.finished && (
              <StyledCategory>{dateFormat(p.finished)}</StyledCategory>
            )}
          <ProjectCard key={p.id} index={i + 1} {...p} />
        </>
      ))}
    </>
  );
};

export default ProjectList;
