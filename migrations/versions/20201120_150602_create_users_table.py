"""create_users_table

Revision ID: ffdc0a98111c
Revises:
Create Date: 2020-11-20 15:06:02.230689

"""
from alembic import op
import sqlalchemy as sa


from sqlalchemy.sql.sqltypes import DateTime


# revision identifiers, used by Alembic.
revision = 'ffdc0a98111c'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###

    op.create_table(
        'users',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('username', sa.String(length=40), nullable=False),
        sa.Column('first_name', sa.String(length=40), nullable=False),
        sa.Column('last_name', sa.String(length=40), nullable=False),
        sa.Column('email', sa.String(length=255), nullable=False),
        sa.Column('hashed_password', sa.String(length=255), nullable=False),
        sa.Column('profile_image', sa.Text(), nullable=True),
        sa.PrimaryKeyConstraint('id'),
        sa.UniqueConstraint('email'),
        sa.UniqueConstraint('username'),
    )
    op.create_table(
        'locations',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('name', sa.String(), nullable=False),
        sa.Column('img1', sa.Text(), nullable=True),
        sa.Column('img2', sa.Text(), nullable=True),
        sa.Column('img3', sa.Text(), nullable=True),
        sa.Column('img4', sa.Text(), nullable=True),
        sa.Column('userId', sa.Integer(), nullable=False),
        sa.Column('description', sa.Text(), nullable=False),
        sa.Column('city', sa.String(length=40), nullable=False),
        sa.Column('state', sa.String(length=40), nullable=False),
        sa.Column('country', sa.String(length=40), nullable=False),
        sa.Column('month', sa.String(length=20), nullable=False),
        sa.Column('day', sa.String(), nullable=False),
        sa.Column('year', sa.String(), nullable=False),
        sa.Column('price', sa.Integer(), nullable=False),
        sa.Column('movieName', sa.String(), nullable=False),
        sa.PrimaryKeyConstraint('id'),
        sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    )
    op.create_table(
        'reviews',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('userId', sa.Integer(), nullable=False),
        sa.Column('locationId', sa.Integer(), nullable=False),
        sa.Column('review', sa.Text(), nullable=False),
        sa.Column('createdAt', sa.DateTime(), nullable=True),
        sa.Column('updatedAt', sa.DateTime(), nullable=True),
        sa.PrimaryKeyConstraint('id'),
        sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
        sa.ForeignKeyConstraint(['locationId'], ['locations.id'], ),
    )
    op.create_table(
        'reservations',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('locationId', sa.Integer(), nullable=False),
        sa.Column('userId', sa.Integer(), nullable=False),
        sa.Column('startDate', sa.DateTime(), nullable=False),
        sa.Column('endDate', sa.DateTime(), nullable=False),
        sa.Column('createdAt', sa.DateTime(), nullable=True),
        sa.Column('updatedAt', sa.DateTime(), nullable=True),
        sa.Column('price', sa.Integer(), nullable=True),
        sa.Column('days', sa.Integer(), nullable=True),
        sa.PrimaryKeyConstraint('id'),
        sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
        sa.ForeignKeyConstraint(['locationId'], ['locations.id'], ),
    )
    # ### end Alembic commands ###qqqqqqqqq


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    op.drop_table('locations')
    op.drop_table('reviews')
    op.drop_table('reservations')
    # ### end Alembic commands ###
