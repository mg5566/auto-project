import { rest } from 'msw';
import PanelList from './dummyData/PanelList.json';

export const handlers = [
  rest.get('/panels', (_, res, ctx) => res(
    ctx.status(200),
    ctx.json(PanelList),
  )),
  rest.get('/panel/:panelId', (req, res, ctx) => {
    const { panelId } = req.params;
    if (PanelList.find((panel) => panel.panelId === panelId)) {
      return res(
        ctx.status(200),
        ctx.json(PanelList.find((panel) => panel.panelId === panelId)),
      );
    } else {
      return res(
        ctx.status(404),
        ctx.json({ message: `Panel with id ${panelId} not found` }),
      )
    }
  }),
  rest.get('/dashboard', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(PanelList),
    );
  })
]
