import React from 'react';
import { useRecoilValue } from 'recoil';
import { statisticsSelector } from '../../recoil/statistics.recoil';
import Statistic from './Statistic';





export default function ListStatistics(): JSX.Element {
    // States
    const statisticAtom = useRecoilValue(statisticsSelector);
    return (
        <>
            {statisticAtom.map((statistic) => (<Statistic {...statistic} />))}
        </>
    );
}