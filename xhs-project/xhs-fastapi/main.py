import asyncio

from unit import loop
from app import APP


async def run(note_id, keyword):
    # note_id = '658aa3820000000018028fd7'
    # keyword = 'omsg'
    user = APP(node_id=note_id, keyword=keyword)
    asyncio.set_event_loop(loop)
    yield loop.run_until_complete(user.run())

# run('65cf66c7000000002d002ac1', '')
# run('', '')
