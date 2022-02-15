---
emoji: 🖥
title: 202202
date: '2022-02-13 16:30:00'
author: mungdo
tags: til
categories: til
---


__👋 매일 공부 기록__


## 🚀 20220214

### <프로젝트 개요 정리>

__코로나로 인한 기업의 근무환경 변화__

1. 프로젝트 배경 
> 코로나 이전부터 기업의 근무환경은 변화하고 있었다고 하지만, 코로나로 인해 그 변화과 더 커지고 있다고 판단했다. 실제로 이러한 변화가 일어났는지 데이터를 바탕으로 살펴보고자 한다.

2. 프로젝트 목표
> 코로나 이전과 이후로 나누어 출퇴근 교통 이용량, 사무실 공실률 등 다양한 지표를 살펴보고 기업의 근무 환경 변화는 어떻게 일어나고 있는지 살펴본다.

3. 구성원 및 역할 : ...

4. 데이터 수집 (18,19 : 코로나 이전 시기) (20,21 : 코로나 이후 시기)
    1. 출퇴근 시간대 교통 이용량 변화 분석을 통한 관찰 대상 지역 설정
        - [서울시 지하철 선별 역별 승하차 인원 정보](https://data.seoul.go.kr/dataList/OA-12914/S/1/datasetView.do#)
        - [서울시 버스노선별 정류장별 시간대별 승하차 인원 정보](http://data.seoul.go.kr/dataList/OA-12913/S/1/datasetView.do#)
    2. 관찰 대상 지역 공실률 분석
        - [서울시 오피스빌딩 임대료·공실률 및 수익률 (2013년 이후) 통계](https://data.seoul.go.kr/dataList/10613/S/2/datasetView.do)

5. 데이터 수집 및 분석 시스템 구축

6. 데이터 분석 및 시각화
    1. 전체 대중교통의 지역별 이동량 > 연도별 이동량
    2. 사무실 밀집 지역으로 이동하는 인구 (18,19 / 20,21)
    3. 전 후 차이 비교
    4. 사무실 밀집 지역 공실률 (18,19 / 20,21)

7. 분석을 통해 나온 인사이트

8. 개선사항 및 분석 결과

- 역할 분담
    - 지하철 역별 승하차 인원 정보 + 위도 경도 정보 정리
    - __버스 정류장별 승하차 인원 정보 + 위도 경도 정보 정리__
    - 지하철, 버스의 지역별 이동량
    - 지하철, 버스의 연도별 이동량
    - 지하철, 버스의 시간대별 이동량
    - 시각화 홈페이지 Django outline 만들기 (layout)

  


### <버스 정류장별 승하차 인원 정보 raw data 정리하기>

1. 1월~12월 csv 데이터 읽어와서 concat()
2. 필요한 index 선별 후 정리
3. pivot_table() 사용해서 원하는 시간대 승하차 정보 합치기(sum)
4. 해당 내용 to_csv()


---

## 🔭 20220215

### <dataframe 조작하기>

왜 어렵지.. 컬럼명 바꾸고 자리 뒤집고 맨날 하면서 맨날 헷갈려서 고생중

1.

```python
df.drop(['Unnamed: 0','Unnamed: 0.1', '정류장_ID'], axis=1)
```

> 데이터 프레임 생성하면 자꾸 새로운 인덱스가 추가됨. 그거 삭제하는 방법 drop. 
> > axis는 열기준, 행기준 지정
> > read_csv() 에서 index_col 미리 지정해주기 : 인덱스로 지정할 열이름 / False (인덱스 한칸 밀려있는 상황일 때, 자체적으로 인덱스 만들어서 0~n 생성)

2.

여러 변수 출력 코드

```python
from IPython.core.interactiveshell import InteractiveShell
InteractiveShell.ast_node_interactivity="all"
```



3. 

거리를 측정하는 haversine 모듈

```python
from haversine import haversine
haversine((경도, 위도), (경도, 위도)) #km
```



4. 

진척상황을 알려주는 tqdm 모듈

```python
from tqdm import tqdm
for i in tqdm(range(100)):
	...
```



5.

피봇테이블 : 특정 기준으로 총 합계나, 평균 등을 계산하고 싶을때

```python
pd_table = pd.pivot_table(df, index=[...], aggfunc='...')
pd_table.reset_index(inplace = True)

```



### <지도 시각화>

```folium``` 을 사용한 지도 시각화

```python
import folium
# 지도 그리기
m = folium.Map(location=[경도, 위도], zoom_start=n)
# 마커 추가
folium.Marker(location=[경도, 위도],
             icon=folium.Icon(...),
             popup='...').add_to(m)
# 실행
m
# 저장하기(html)
m.save('new_map.html')
```




---

## 🧩 20220216













```toc
```

