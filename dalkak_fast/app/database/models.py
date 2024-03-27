from sqlalchemy import Column, TEXT, INT, BIGINT,DATETIME
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Heart(Base):
    __tablename__ = "HEART"

    id = Column(BIGINT, autoincrement=True, primary_key=True)
    member_id = Column(BIGINT)
    cocktail_id = Column(BIGINT)
    created_date=Column(DATETIME)

class Survey_Ingredient(Base):
    __tablename__ = "SURVEY_INGREDIENT"

    id = Column(BIGINT, autoincrement=True, primary_key=True)
    survey_id = Column(BIGINT)
    ingredient_id = Column(BIGINT)

class Survey_Cocktail(Base):
    __tablename__ = "SURVEY_COCKTAIL"

    id = Column(BIGINT, autoincrement=True, primary_key=True)
    survey_id = Column(BIGINT)
    cocktail_id=Column(BIGINT)

class Survey(Base):
    __tablename__ = "SURVEY"

    id = Column(BIGINT, autoincrement=True, primary_key=True)
    member_id=Column(BIGINT)
    occasion_id = Column(BIGINT)
    base_id=Column(BIGINT)
    alcohol_content=Column(INT)
    sweetness=Column(INT)
