from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# SQLALCHEMY_DATABASE_URL = "sqlite:///./sql_app.db"
SQLALCHEMY_DATABASE_URL = "postgresql://git_pull_some_beaches_db_user:PYG8jGiHMXT0LXPBQeZoeyJ3DUllyqwN@dpg-cnq2j7la73kc738g0md0-a.singapore-postgres.render.com/git_pull_some_beaches_db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()