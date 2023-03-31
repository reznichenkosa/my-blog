import { authActions } from '../../model/slice/auth-slice'
import { memo, useCallback, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'shared/ui/button'
import { Input } from 'shared/ui/input'
import styles from './LoginForm.module.scss'
import { getAuthState } from '../../model/selectors/getAuthState/getAuthState'
import { loginByUsername } from '../../model/services/login-by-username/login-by-username'
import { Text } from 'shared/ui/text/Text'

export const LoginForm: FC = memo(() => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { password, username, isLoading, error } = useSelector(getAuthState)

  const changeUsernameHandler = useCallback(
    (value: string) => {
      dispatch(authActions.changeUsername(value))
    },
    [dispatch],
  )

  const changePasswordHandler = useCallback(
    (value: string) => {
      dispatch(authActions.changePassword(value))
    },
    [dispatch],
  )

  const loginHandler = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    dispatch(loginByUsername({ password, username }))
  }, [password, username, dispatch])

  return (
    <div className={styles.wrapper}>
      <Text title={t('login') ?? ''} />
      <Input placeholder={t('login') ?? ''} value={username} onChange={changeUsernameHandler} />
      <Input
        placeholder={t('password') ?? ''}
        value={password}
        onChange={changePasswordHandler}
        type='password'
      />
      {isLoading ? (
        '...Auth'
      ) : (
        <Button variant='outline' onClick={loginHandler}>
          {t('signIn')}
        </Button>
      )}
      {error && <Text text={t(error) ?? ''} variant='error' />}
    </div>
  )
})
