import AlarmIcon from '@mui/icons-material/Alarm';
import { Box, Button, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  checkNotificationSeen,
  getNotificationList,
} from '../apis/notification';
import NotificationList from '../components/Alarm/NotificationList';
import TabContainer from '../components/Alarm/TabContainer';
import { ROUTES } from '../constants/routes';

const { SIGNIN } = ROUTES;

//TODO: Tab type 값 상수롤 따로 빼기(Notification, NotificationList)
const MESSAGE = 'message';
const CHECK_ALL_NOTIFICATION = '전체 읽음';

const Notification = () => {
  const [tabValue, setTabValue] = useState(MESSAGE);
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  const setNotificationsOrRedirection = async () => {
    const result = await getNotificationList();

    result ? setNotifications(result) : navigate(SIGNIN);
  };

  useEffect(() => {
    const getNotifications = async () => {
      await setNotificationsOrRedirection();
    };

    getNotifications();
  }, [tabValue]);

  const handleCheckNotificationBtnClick = async () => {
    await checkNotificationSeen();
    await setNotificationsOrRedirection();
  };

  return (
    <Box
      sx={{
        minWidth: '320px',
        maxWidth: '480px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Box
        component='header'
        sx={{
          width: '92%',
          margin: '0 auto',
        }}>
        {/* Thinking: 알림을 아이콘 말고, 텍스트로 보여주기 */}
        <IconButton
          color='secondary'
          aria-label='add an alarm'
          sx={{
            marginBottom: '15px',
          }}>
          <AlarmIcon
            sx={{
              width: '50px',
              height: '50px',
              color: '#f99b0f',
            }}
          />
        </IconButton>
      </Box>
      <Box
        component='main'
        sx={{
          width: '92%',
          display: 'block',
          margin: '0 auto',
        }}>
        <Box
          component='section'
          sx={{
            marginBottom: '15px',
          }}>
          <TabContainer
            onClick={(type) => {
              setTabValue(type);
            }}
          />
        </Box>
        <Box component='section'>
          <Button onClick={handleCheckNotificationBtnClick}>
            {CHECK_ALL_NOTIFICATION}
          </Button>
          <NotificationList type={tabValue} notifications={notifications} />
        </Box>
      </Box>
    </Box>
  );
};

export default Notification;
