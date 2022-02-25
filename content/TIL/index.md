---
emoji: 🖥
title: "202202"
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

__1__.

```python
df.drop(['Unnamed: 0','Unnamed: 0.1', '정류장_ID'], axis=1)
```

> 데이터 프레임 생성하면 자꾸 새로운 인덱스가 추가됨. 그거 삭제하는 방법 drop. 
> > axis는 열기준, 행기준 지정
> > read_csv() 에서 index_col 미리 지정해주기 : 인덱스로 지정할 열이름 / False (인덱스 한칸 밀려있는 상황일 때, 자체적으로 인덱스 만들어서 0~n 생성)

__2.__

여러 변수 출력 코드

```python
from IPython.core.interactiveshell import InteractiveShell
InteractiveShell.ast_node_interactivity="all"
```



__3.__

거리를 측정하는 haversine 모듈

```python
from haversine import haversine
haversine((경도, 위도), (경도, 위도)) #km
```



__4.__

진척상황을 알려주는 tqdm 모듈

```python
from tqdm import tqdm
for i in tqdm(range(100)):
	...
```



__5.__

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



이상하다.. 나 안놀았는데 기록할게 없네.. 오늘은 팀프로젝트에서 파일 내 결측치를 보고 채울 수 있는 내용 채우고, 그로 인해서 발생하는 수정사항을 반영해 데이터를 정리했다. 중구난방인 데이터 다 열어서 컬럼 확인하고 정리도 했다. PPT 초안도 만들었다. 



### <지도 시각화>

__1.__

boxplot 그려보기

```python
fig, ax = plt.subplots(1, 2, figsize= (10,10))
ax[0].boxplot(data=df, x='출근')
ax[1].boxplot(data=df, x='퇴근')
plt.show() 
```

> subplots로 나눠서 한 화면에 2가지 그래프를 보여줄 수 있음. 



__2.__

quantile

```python 
df.quantile(q=0.5) # 2분위수(50%)에 해당하는 값을 찾을 수 있음
```



__3.__

groupby

```python
df.groupby(['사용년월'],as_index=False).sum()
# df에 사용년월 행을 기준으로 그룹화
```



### <통계 공부>

__1.__ 이산형 확률변수

- 확률질량함수(확률함수)
- 확률분포
- 확률의 성질 : 모든 확률은 0 이상이며 합하면 1이 된다.
- 기댓값 : 확률변수의 평균. 기댓값은 선형성이 성립함.



---

## 🙈 20220217

### <dataframe 조작하기>

__1.__

첫번째 행을 column으로 지정하기

```python
df.rename(columns=df.iloc[0]).drop(df.index[0])
# rename으로 column이름 변경 후 첫번째 index를 drop해 제거
```



__2.__

컬럼명을 바꾸고 싶을 때는 rename 

```python
df.rename(columns={"정류장_ID":"표준버스정류장ID"}, inplace=True)
```



__3.__

맥에서 그래프 그릴때 한글 깨짐 복구

```python
from matplotlib import rc
plt.rcParams["axes.unicode_minus"] = False 
rc("font", family="Arial Unicode MS") # Windows: Malgun Gothic 
# %matplotlib inline 
get_ipython().run_line_magic("matplotlib", "inline")
```



__4.__ 날짜 데이터

* 날짜 데이터를 Datetime 형태로 변환 : pd.to_datetime
* 요일로 변환 : datetime.day_name()



__5.__

인덱스 순서를 조정하고 싶다? reindex

```python
df.reindex(index=['순서대로','작성한','인덱스'])
```



__6.__

데이터 열들 중 중복된 항목 제거하고 싶다면 ```df.drop_duplicates```



### <시각화>

__1.__ ```heatmap```

```python
plt.figure(figsize=(30,5))
sns.heatmap(data = df, 
            cmap='YlGnBu', # 색 테마
            annot=True, # 안에 데이터 표기할까?
            fmt = '.3f', # 얼마까지 보여줘(포매팅)
            vmin=0, # 최소값
            vmax=2200) #최대값
plt.show()
```



__2.__ 지도시각화 ```folium```

```python
folium.Circle(location=(lat , lng),
              radius=100, # 반경
              fill=True, 
              color='blue',
              popup=folium.Popup(name, max_width=100)) # 클릭하면 나오게 할 문구
```



---



## 🍕 20220218



### <시각화>

__1.__ Line plot

```python
fig = plt.figure(figsize=(10,5))
ax = fig.add_subplot()

ax.plot(X1, Y1, label='first')
ax.plot(X2, Y2, label='second')
ax.plot(X3, Y3, label='third')

ax.legend()

plt.title('Title', fontsize=15)
plt.show()
```



### <git 환경 구성>

1. git clone
2. git branch
3. git merge



### <Django 웹 구현>

1. views.py

    파일에 들어가서 함수 정의

   ```python
   def 함수명(request): 
       return render(request, '본인이 만든 파일명.html')
   ```

2. *urls.py* 파일에 들어가서 `path('주소', views.함수명)` 한 줄 추가

3. index.html

   파일에 들어가서

   ```html
   <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">...<... 
   ```

   해당 a태그 href에 주소값 넣기

4. `python manage.py runserver` 실행 후 정상 실행 되는 경우에만 push


---

## 🤨 20220221



### <알고리즘>

* 선택 정렬 : 맨 앞 번호와 그 외 번호들 중 가장 작은 값의 자리를 바꿔나가기
* 삽입 정렬 : 맨 앞(기준)을 중심으로 그 다음번호들이 기준보다 작으면 왼쪽에, 크면 오른쪽에
* 퀵 정렬 : 맨 앞(기준)을 두고 그 다음 번호들의 양 끝단 끼리 비교. 비교 대상을 가운데쪽으로 옮겨가면서 비교
* 계수 정렬 : (범위가 좁고, 반복이 잦은 수를 정렬할 때) 해당 숫자를 포함하는 최소값~최대값의 인덱스를 갖는 리스트를 생성하고 해당 번호가 나올 때 마다 +1해둠. 출력시 앞에부터 + 되어 있는 개수만큼 출력해줌.

[블로그 포스팅](https://mungdo-log.tistory.com/376)
[깃허브 링크](https://github.com/mungdo/mungdo/tree/main/study/algorithm)


---

## 👀 20220223



### <django 웹 구현 순서>

1. templates에 시각화 html 페이지 완성 후
2. views.py 파일에 들어가서 함수 정의
 ``` def 함수명(request): return render(request, '본인이 만든 파일명.html')```
3. urls.py 파일에 들어가서 path('주소', views.함수명) 한 줄 추가
4. index.html 파일에 들어가서
```<a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">...<... ```
해당 a태그 href에 주소값 넣기
5. python manage.py runserver 실행 후 정상 실행 되는 경우에만 push
6. push 후 공유!


### <체크박스 만들기 : 선택/취소 버튼까지 >

> 체크 박스가 체크 되어 있는 경우만 화면에 띄우기

1. HTML
```html
    <h1 class="mt-4">코로나 전후 시간대별-요일별 지하철 이용자 추이</h1>
    <div style="font-size:15pt">
        <input type="checkbox" name="chk" value="18년_요일_시간_히트맵">2018년 요일 시간 히트맵<br>
        <input type="checkbox" name="chk" value="19년_요일_시간_히트맵">2019년 요일 시간 히트맵<br>
        <input type="checkbox" name="chk" value="20년_요일_시간_히트맵">2020년 요일 시간 히트맵<br>
        <input type="checkbox" name="chk" value="21년_요일_시간_히트맵">2021년 요일 시간 히트맵<br>
        <input type="checkbox" name="chk" value="코로나_전_요일_시간_히트맵">코로나 전/후 평일 출근시간 이용객 추이<br>
        <input type="checkbox" name="chk" value="코로나_후_요일_시간_히트맵">코로나 전/후 평일 퇴근시간 이용객 추이<br>
    </div>
    <div>
        <input type="button" value="선택" onclick="selectImg();">
        <input type="button" value="취소" onclick="clearDiv();">
    </div>
    <span>
        <img style="display:none;" src="/static/images/time_week_sub/18년_요일_시간_히트맵.png">
    </span>
    <span>
        <img style="display:none;" src="/static/images/time_week_sub/19년_요일_시간_히트맵.png">
    </span>
    <span>
        <img style="display:none;" src="/static/images/time_week_sub/20년_요일_시간_히트맵.png">
    </span>
    <span>
        <img style="display:none;" src="/static/images/time_week_sub/21년_요일_시간_히트맵.png">
    </span>
    <span>
        <img style="display:none;" src="/static/images/time_week_sub/코로나_전_요일_시간_히트맵.png">
    </span>
    <span>
        <img style="display:none;" src="/static/images/time_week_sub/코로나_후_요일_시간_히트맵.png">
    </span>
```
2. Javascript
```javascript
    function selectImg(){
        var chks = document.getElementsByName("chk");
        var imgs = document.getElementsByTagName("img")
        console.log(imgs, chks)
        for (var i = 0; i < chks.length; i++){
            if (chks[i].checked){
                imgs[i].style.display = 'inline'
            } else {
                imgs[i].style.display = 'none'
            }
        }
    }
    function clearDiv(){
        var chks = document.getElementsByName("chk")
        var imgs = document.getElementsByTagName("img")
        for (var i = 0; i < chks.length; i++){
        imgs[i].style.display = 'none'
        }
        for (var i = 0; i < chks.length; i++){
        chks[i].checked = ''
        }
    }
```

![스크린샷 2022-02-24 오전 9 29 40](https://user-images.githubusercontent.com/82261307/155433942-45202573-e394-423c-9d3d-d99e4f817805.png)




---

## 🙆‍♀️ 20220225

어제는 프로젝트 진행때문에 Django 수정 필요한거 하고, ppt 내용 마무리 짓는 것만 했다. 오늘은 그래도 공부해야지!!!


### <통계분석>




```toc
```

