import React, { useEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { WorkRoutes, WorkCateRoutes } from '@/module/work/route'
import WorkNavigation from '@/module/work/components/navigation'
import NotFound from '@/components/not-found'

const WorkLayout = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="work-layout">
      <WorkNavigation />
      <div className=" work-layout__body my-container wrapper ">
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={800}
            classNames="sliding-page"
            unmountOnExit
          >
            <Switch location={location}>
              {[...WorkRoutes, ...WorkCateRoutes].map(
                ({ path, exact, component: Component }) => (
                  <Route
                    key={path}
                    path={path}
                    exact={exact}
                    component={Component}
                  />
                )
              )}
              <Route component={NotFound} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  )
}

export default WorkLayout
